<?php
header('Access-Control-Allow-Origin: *');
include('connection.php');

if ($conn->connect_error) {
    die("Unable to connect: " . $conn->connect_error);
  }
  
  $query = "SELECT * FROM filmy";
  $results = mysqli_query($conn, $query);

  $rows = array();
  if(mysqli_num_rows($results) > 0){
   while($row = mysqli_fetch_assoc($results)) {
       array_push($rows, $row);
   }		
   print json_encode($rows);
  }
  else {
   echo("No records found");
  }

//     // $movie_id = $_GET['movie_id'];
//     $query = "SELECT * FROM `filmy`";
//     $result = mysqli_query($conn,$query);
//     // $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
 
//   while($row = mysqli_fetch_array($result)) {
    
//     $movieData['movie_id'] = $row['id'];
//     $movieData['movie_name'] = $row['tytul'];
//     $movieData['movie_year'] = $row['rok'];
//     $movieData['movie_director'] = $row['rezyser'];
//     $movieData['movie_genre'] = $row['gatunek'];
    
    
//   }
//   $response["results:"] = $movieData;
//   echo json_encode($response);



?>