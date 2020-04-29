/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the term_iterations's controller class.
It receives calls from the "GrChildrenRoutes" class and
passes the calls down to the "GrChildrenModel" class
*/



const GrChildrenModel = require('../../models/great_grand_children/GrChildrenModel.js');




module.exports = class GrChildrenController{
    constructor(){

    }



    static insert(jsonObject_){
        return new Promise(function(resolve, reject) {

            var myPromise = GrChildrenModel.insert(jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static get_all_records(){
        return new Promise(function(resolve, reject) {

            var myPromise = GrChildrenModel.get_all_records();


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static get_specific_records(ColumnName,value_){
        return new Promise(function(resolve, reject) {

            var myPromise = GrChildrenModel.get_specific_records(ColumnName,value_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })
        })
    }




    static batch_update(jsonObject_){
        return new Promise(function(resolve, reject) {


            var myPromise = GrChildrenModel.batch_update(jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static individual_record_update(ColumnName,value_,jsonObject_){
        return new Promise(function(resolve, reject) {


            var myPromise = GrChildrenModel.individual_record_update(ColumnName,value_,jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
        return new Promise(function(resolve, reject) {


            var myPromise = GrChildrenModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }



    static get_number_of_records(ColumnName,value_){
        return new Promise(function(resolve, reject) {


            var myPromise = GrChildrenModel.get_number_of_records(ColumnName,value_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }






    static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
        return new Promise(function(resolve, reject) {


            var myPromise = GrChildrenModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }




}