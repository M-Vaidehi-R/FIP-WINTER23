<?php

require_once('./models/EmployeeModel.php');

    class EmployeeController{

        private $model;


        public function __construct(){
            $this->model=new EmployeeModel();
        }

        public function loadViews(){

            require_once('views/news_head.php');
            require_once('views/news_footer.php');
            require_once('views/news_search.php');

            //controller makes decision on dynamic content needed::  when an unique url(route) is returned


            require_once('views/footer.php');




        }


    }
?>