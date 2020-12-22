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
        this.token = Buffer.from(`:${this.apikey}`, 'utf8').toString('base64');
    }
    async getAllLists() {
        var _self = this;
        return new Promise(function (resolve, reject) {
            axios({
                method: 'get',
                url: _self.apiurl+'/lists',
                headers: { 
                'Authorization': 'Basic '+_self.token
                }
            })
            .then(function(response) {
                resolve(response.data);
            }).catch(function(error) {
                reject(error);
            });

    });

    }
    async getList(listid) {
        var _self = this;
        return new Promise(function (resolve, reject) {
        
            axios({
                method: 'get',
                url: _self.apiurl+'/lists/'+listid,
                headers: { 
                'Authorization': 'Basic '+_self.token
                }
            })
            .then(function(response) {
                resolve(response.data);
            }).catch(function(error) {
                reject(error);
            });



        });

    }
    async getListEntries(listid) {
        var _self = this;
        return new Promise(function (resolve, reject) {
         
            axios({
                method: 'get',
                url: _self.apiurl+'/lists/'+listid+'/list-entries',
                headers: { 
                'Authorization': 'Basic '+_self.token
                }
            })
            .then(function(response) {
                resolve(response.data);
            }).catch(function(error) {
                reject(error);
            });
        

        });

    }
    getListEntry(entryid) {
        var _self = this;
        return new Promise(function (resolve, reject) {
       
            axios({
                method: 'get',
                url: _self.apiurl+'/lists/'+listid+'/list-entries/'+entryid,
                headers: { 
                'Authorization': 'Basic '+_self.token
                }
            })
            .then(function(response) {
                resolve(response.data);
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