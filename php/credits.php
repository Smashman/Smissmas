<?php

include 'config.php';

$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

$query = "SELECT * from users where account_id in (33885066,39933033,87084440)";

$result = $conn->query($query);

$users = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[$row['account_id']] = ["avatar"=>$row['avatar_medium'],"name"=>htmlspecialchars($row['name']),"url"=>$row['profile_url']];
    }
}

function steam_block ($user_id,$role,$long=false) {
    global $users;
    if ($users[$user_id]) {
        echo '<a class="steam" href="'.$users[$user_id]['url'].'" target="_blank">
                            <div class="iconholder">
                                <img src="'.$users[$user_id]['avatar'].'" />
                            </div>
                            <div class="name">'.$users[$user_id]['name'].'</div>
                            <div class="role'.($long ? ' long': '').'"">'.$role.'</div>
                        </a>';
    }
}