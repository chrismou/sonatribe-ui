import Ember from 'ember';

var originalZIndex;

export default Ember.View.extend({
   tagName: 'header',
   classNames: ['d-header', 'clearfix'],
   classNameBindings: ['editingTopic'],
   templateName: 'header',

   showDropdown: function($target) {
    var elementId = $target.data('dropdown') || $target.data('notifications'),
        $dropdown = Ember.$('#' + elementId),
        $li = $target.closest('li'),
        $ul = $target.closest('ul'),
        $html = Ember.$('html'),
        $header = Ember.$('header'),
        replyZIndex = parseInt(Ember.$('#reply-control').css('z-index'), 10),
        self = this;

    originalZIndex = originalZIndex || Ember.$('header').css('z-index');

    if(replyZIndex > 0) {
      $header.css('z-index', replyZIndex + 1);
    }

    var controller = self.get('controller');
    if(controller && !controller.isDestroyed){
      controller.set('visibleDropdown', elementId);
    }
    // we need to ensure we are rendered,
    //  this optimises the speed of the initial render
    var render = $target.data('render');
    if(render){
      if(!this.get(render)){
        this.set(render, true);
        Ember.run.next(this, function(){
          this.showDropdown.apply(self, [$target]);
        });
        return;
      }
    }

    var hideDropdown = function() {
      $header.css('z-index', originalZIndex);
      $dropdown.fadeOut('fast');
      $li.removeClass('active');
      $html.data('hide-dropdown', null);
      var controller = self.get('controller');
      if(controller && !controller.isDestroyed){
        controller.set('visibleDropdown', null);
      }
      return $html.off('click.d-dropdown');
    };

    // if a dropdown is active and the user clicks on it, close it
    if($li.hasClass('active')) { return hideDropdown(); }
    // otherwhise, mark it as active
    $li.addClass('active');
    // hide the other dropdowns
    Ember.$('li', $ul).not($li).removeClass('active');
    Ember.$('.d-dropdown').not($dropdown).fadeOut('fast');
    // fade it fast
    $dropdown.fadeIn('fast');
    // autofocus any text input field
    $dropdown.find('input[type=text]').focus().select();

    $html.on('click.d-dropdown', function(e) {
      return Ember.$(e.target).closest('.d-dropdown').length > 0 ? true : hideDropdown.apply(self);
    });

    $html.data('hide-dropdown', hideDropdown);

    return false;
  },

  examineDockHeader: function() {

    var headerView = this;

    // Check the dock after the current run loop. While rendering,
    // it's much slower to calculate `outlet.offset()`
    Ember.run.next(function () {
      if (!headerView.docAt) {
        var outlet = Ember.$('#main-outlet');
        if (!(outlet && outlet.length === 1)) {
          return;
        }
        headerView.docAt = outlet.offset().top;
      }

      var offset = window.pageYOffset || Ember.$('html').scrollTop();
      if (offset >= headerView.docAt) {
        if (!headerView.dockedHeader) {
          Ember.$('body').addClass('docked');
          headerView.dockedHeader = true;
        }
      } else {
        if (headerView.dockedHeader) {
          Ember.$('body').removeClass('docked');
          headerView.dockedHeader = false;
        }
      }
    });

  },

   didInsertElement: function() {

    var self = this;

    this.$('a[data-dropdown]').on('click.dropdown', function(e) {
      self.showDropdown.apply(self, [Ember.$(e.currentTarget)]);
      return false;
    });
    this.$().on('click.notifications','a.unread-private-messages, a.unread-notifications, a[data-notifications]', function(e) {
      self.showNotifications(e);
      return false;
    });
    Ember.$(window).bind('scroll.discourse-dock', function() {
      self.examineDockHeader();
    });
    Ember.$(document).bind('touchmove.discourse-dock', function() {
      self.examineDockHeader();
    });
    self.examineDockHeader();

    // Delegate ESC to the composer
    Ember.$('body').on('keydown.header', function(e) {
      // Hide dropdowns
      if (e.which === 27) {
        self.Ember.$('li').removeClass('active');
        self.Ember.$('.d-dropdown').fadeOut('fast');
      }
      if (self.get('editingTopic')) {
        if (e.which === 13) {
          self.finishedEdit();
        }
        if (e.which === 27) {
          return self.cancelEdit();
        }
      }
    });
  }
});
