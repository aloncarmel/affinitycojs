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
        var _self = this;
        return new Promise(function (resolve, reject) {
       
            axios({
                method: 'get',
                url: _self.apiurl+'/persons/'+personid,
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
    searchPerson(term) {
        var _self = this;
        return new Promise(function (resolve, reject) {
       
            axios({
                method: 'get',
                url: _self.apiurl+'/persons?term='+term,
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
    getOrganization(orgid) {
        var _self = this;
        return new Promise(function (resolve, reject) {
       
            axios({
                method: 'get',
                url: _self.apiurl+'/organizations/'+orgid,
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
    searchOrganization(term) {
        var _self = this;
        return new Promise(function (resolve, reject) {
       
            axios({
                method: 'get',
                url: _self.apiurl+'/organizations?term='+term,
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
    getOpportunity(opid) {
        var _self = this;
        return new Promise(function (resolve, reject) {
       
            axios({
                method: 'get',
                url: _self.apiurl+'/opportunities/'+opid,
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
    searchOpportunities(term) {
        var _self = this;
        return new Promise(function (resolve, reject) {
       
            axios({
                method: 'get',
                url: _self.apiurl+'/opportunities?term='+term,
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
};

module.exports = AffinitycoJs;