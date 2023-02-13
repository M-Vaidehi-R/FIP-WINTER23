<?php

/* 
About: So basically, when they sign up for news letter, they give their name and email (create func) :>
So for updating later, they can  sign into their account, and update
Same as updating for delete as well...and their respective functions

Search func is for us, like searching in database :>

I have created a database, I have included that in the folder.
So will update this file, as Rob teaches us more..For now IDk how its going I am 
just going the way he is teaching..bcs even I dont have much idea about this.
I am just learning..now it wont be connected, I am just doing PHP part, and 
will show ROB next week..

$total_sign_ups => this static variable gets updated everey time an user creates or deletes his profile. 
So may be we can show in the website, the numverb of people, who is already signed up for news letter or something like that. 

Yeah..thats basically it.   :>
*/

require_once("./includes/config.php");

    class news_letter {

        private $news_id;
        public $news_fullname;
        public $news_email;    
        protected $news_created_at; 
        static $total_sign_ups = 0;

        protected $connection;  
        protected $table;
        public $rows;
        protected $fields = array();

        public function __construct() {

            $dsn = "mysql:host=".DB_SERVER.";dbname=".DB_NAME.";charset=utf8mb4";  //mysql indicates what kind of datbase is passing
            try {
            $this->connection = new PDO($dsn, DB_USER, DB_PASS);  
            } catch (Exception $e) {
            error_log($e->getMessage());
            exit('unable to connect');

                } 
            }

        protected function news_create($statement,$values){
            $stmt = $this->connection->prepare("INSERT INTO ".$this->table.$statement);  //run connection prepare and pass the raw query  //pass the values in this order  (in place of ?s)
            $stmt->execute($values);
            $stmt = null;  
        }

        protected function news_update($statement,$values){

            $stmt = $this->connection->prepare("UPDATE ".$this->table.$statement);  //run connection prepare and pass the raw query
            $stmt->execute($values);
            $stmt = null;             
        }

        protected function news_delete($id)
        {
            $stmt = $this->connection->prepare("DELETE FROM ".$this->table." WHERE id = ?");  //run connection prepare and pass the raw query
            $stmt->execute([$id]);
            $stmt = null;   
        }

        protected function search($fld,$str){
            $stmt = $this->connection->prepare("SELECT * FROM ".$this->table." WHERE ".$fld." LIKE ?");  //run connection prepare and pass the raw query
            $stmt->execute(["%$str%"]);
            $arr = $stmt->fetchAll(PDO::FETCH_OBJ); //we know we r gonna fetch a array of object as return object. 
            //telling PDO, forcing PDO to bring back array of objs   ->FETCH::OBJ

            $this->rows = $stmt->rowCount();
            if(!$arr) exit('No results returned.'); 
            return $arr;
            $stmt = null;  
        }

}



?>