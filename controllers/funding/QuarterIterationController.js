/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the term_iterations's controller class.
It receives calls from the "QuarterIterationRoutes" class and
passes the calls down to the "QuarterIterationModel" class
*/



const QuarterIterationModel = require('../../models/funding/QuarterIterationModel.js');




module.exports = class QuarterIterationController{
    constructor(){

    }



    static insert(jsonObject_){
        return new Promise(function(resolve, reject) {

            var myPromise = QuarterIterationModel.insert(jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static get_all_records(){
        return new Promise(function(resolve, reject) {

            var myPromise = QuarterIterationModel.get_all_records();


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static get_specific_records(ColumnName,value_){
        return new Promise(function(resolve, reject) {

            var myPromise = QuarterIterationModel.get_specific_records(ColumnName,value_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })
        })
    }




    static batch_update(jsonObject_){
        return new Promise(function(resolve, reject) {


            var myPromise = QuarterIterationModel.batch_update(jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static individual_record_update(ColumnName,value_,jsonObject_){
        return new Promise(function(resolve, reject) {


            var myPromise = QuarterIterationModel.individual_record_update(ColumnName,value_,jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
        return new Promise(function(resolve, reject) {


            var myPromise = QuarterIterationModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }



    static get_number_of_records(ColumnName,value_){
        return new Promise(function(resolve, reject) {


            var myPromise = QuarterIterationModel.get_number_of_records(ColumnName,value_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }






    static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
        return new Promise(function(resolve, reject) {


            var myPromise = QuarterIterationModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }




}