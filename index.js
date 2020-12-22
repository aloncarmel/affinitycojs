/* 
    Name: AffinitycoJs
    Description: Affinity.co Javascript API Wrapper.
    Author: Alon Carmel
    URI: https://github.com/aloncarmel/affinitycojs.git
    Year: 2020
*/
const axios = require('axios');

class AffinitycoJs {
    constructor(config) {
        this.apikey = config.apikey;
        this.apiurl = 'https://api.affinity.co';
        this.auth = {
            auth: {
                username: '',
                password: this.apikey
            }
        };
    }
    async getAllLists() {

        return new Promise(function (resolve, reject) {
        
            axios.get(this.apiurl+'/lists', {}, this.auth)
                .then(function(response) {
                    resolve(response);
                }).catch(function(error) {
                    reject(error);
                });

        });

    }
    async getList(listid) {

        return new Promise(function (resolve, reject) {
        
            axios.get(this.apiurl+'/lists/'+listid, {}, this.auth)
                .then(function(response) {
                    resolve(response);
                }).catch(function(error) {
                    reject(error);
                });

        });

    }
    async getListEntries(listid) {

        return new Promise(function (resolve, reject) {
        
            axios.get(this.apiurl+'/lists/'+listid+'/list-entries', {}, this.auth)
                .then(function(response) {
                    resolve(response);
                }).catch(function(error) {
                    reject(error);
                });

        });

    }
    getListEntry(entryid) {

        return new Promise(function (resolve, reject) {
        
            axios.get(this.apiurl+'/lists/'+listid+'/list-entries/'+entryid, {}, this.auth)
                .then(function(response) {
                    resolve(response);
                }).catch(function(error) {
                    reject(error);
                });

        });

    }
    getPerson(personid) {
        
    }
    searchPerson(term) {

    }
    getOrganization(orgid) {

    }
    searchOrganization(term) {

    }
    getOpportunity(opid) {

    }
    searchOpportunities(term) {

    }
};

module.exports = AffinitycoJs;