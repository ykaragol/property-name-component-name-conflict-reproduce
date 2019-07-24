import Component from '@ember/component';
import { computed } from '@ember/object'

export default Component.extend({
    personName: computed('person.{firstName,lastName}', function() {
        return this.person.firstName + ' ' + this.person.lastName
    })
});
