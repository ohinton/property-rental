import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },
    update(announcement) {
      var params = {
        title: this.get('title'),
        type: this.get('type'),
        date: this.get('date'),
        message: this.get('message')
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('update', announcement, params);
    }
  }
});
