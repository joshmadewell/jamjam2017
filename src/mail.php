<?php
	$errors = array(); // array to hold validation errors

	$data = array(); // array to pass back data
	//echo $_POST['name'];
		$data['success'] = true;
		$data['messageSuccess'] = 'Hey! Gracias por contactarnos, en breve nos comunicaremos contigo';
		print_r($_POST);
		// CHANGE THE TWO LINES BELOW
		$email_from = $_POST['email']; // required
		$email_to = "josh.madewell@gmail.com";
		$email_subject = "this is a test"; // required
		$name = $_POST['name']; // required
		$subject = $_POST['email']; // required
		$message = $_POST['message']; // required
		//$date = $_POST['date'];
		$date='';
		$number='';
		$meal='';
		$notes='';
		$message='';
		$guest='';
		if(isset($_POST['date'])){
			 $date= "<tr><td>Date:".$_POST['date']."</td></tr>";
		}
		if(isset($_POST['number'])){
			 $number= "<tr><td>Number:".$_POST['number']."</td></tr>";
		}
		if(isset($_POST['meal'])){
			 $meal= "<tr><td>Meal:".$_POST['meal']."</td></tr>";
		}
		if(isset($_POST['notes'])){
			 $notes= "<tr><td>Notes:".$_POST['notes']."</td></tr>";
		}
		if(isset($_POST['message'])){
			 $message= "<tr><td>Enquiry:".$_POST['message']."</td></tr>";
		}
if(isset($_POST['guest'])){
			 $number= "<tr><td>Number:".$_POST['guest']."</td></tr>";
		}

		// Form Message begin

		$email_message = "<table border='0' cellpadding='2' cellspacing='2' width='600'>
		<tr><td>Form details below:</td></tr>
		<tr><td>Name: ".$name." </td></tr>
		<tr><td>Email: ".$email_from."</td></tr>

		 ".$number."
		  ".$date."
		  ".$meal."
		  ".$notes."
		  ".$message."
		  ".$guest."
		</table>";


		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		// Additional headers
		$headers .= 'Reply-To: '.$email_from."\r\n";
		$headers .= 'From: '.$email_from . "\r\n";
		$headers .= 'Cc: '.$cc . "\r\n";
		$headers .= 'X-Mailer: PHP/' . phpversion();

		echo $email_to."====".$email_subject."------".$email_message.'--------'.$headers;
	// Send Mail

		if(@mail($email_to, $email_subject, $email_message, $headers))
		echo json_encode($data);

	// return all our data to an AJAX call

?>
