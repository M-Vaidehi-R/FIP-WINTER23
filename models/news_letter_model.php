<?php
require_once('Database.php');

class EmployeeModel extends news_letter{
    
public function __construct() {

    parent::__construct(); //go to the parent of this class and run the constructor function :..: it only works for constructors

    $this->table = 'tbl_news_letter';
    $this->fields = 'news_fullname, news_email, news_created_at';
}

public function newsignUp(){


    $statement=  " (" .$this->fields. ") VALUES (?, ?, ?, ?, ?)";

    // $_POST values from a form
    $values=['Caramal Latte', 'clatte@gmail.com', '9/02/2023'];
    $this->news_create($statement, $values);

}

public function updatesignUp($id){

    $statement=" SET news_fullname = ?, news_email = ?, news_created_at = ?";
    $values=['Caramal Latte', 'clatte@gmail.com', '9/02/2023', $id];

    $this->news_update($statement,$values);
}

public function deletesignUp($id){

    //confirm the deletion for deleting
    $this->news_delete($id);
}
}

?>