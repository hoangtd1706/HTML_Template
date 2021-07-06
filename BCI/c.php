<?php
require_once("../db/dbhelp.php");

const KEY = 'manhml';

class returnData
{
    function returnData($code, $data, $msg)
    {
        $this->code = $code;
        $this->data = $data;
        $this->msg = $msg;
    }
}
class user
{
    function user($id, $name, $email, $timeInsert, $timeUpdate)
    {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->timeInsert = $timeInsert;
        $this->timeUpdate = $timeUpdate;
    }
}

class Token
{

    function encode_token($token)
    {
        $token = explode('.', $token);
        $header = $token[0];
        $payload = $token[1];
        $sig = $token[2];
        $_header = json_decode(base64_decode($header));

        if ($_header && $_header->alg == '256' && $_header->typ == 'jwt') {

            $_payload = json_decode(base64_decode($payload));
            /* tìm thông tin user */
            /* $_payload bao gồm thông tin uid, sub, exp */
            //$user;
            $sql = "SELECT * FROM `user` WHERE id = '$_payload->uid' AND name = '$_payload->sub'";
            $user =  executeNum($sql);

            /* nếu thông tin user đúng */
            if (!empty($user) && $user) {
                $_sig = hash_hmac('sha256', $header . '.' . $payload, KEY);
                /* nếu sau khi mã hóa ngược signature trùng với signature trong token thì pass re login */
                if ($_sig == $sig) {
                    return true;
                }
            }
        }
    }
}
if (!empty($_POST)) {
    $email =  $_POST['email'];
    $pass = $_POST['pass'];
    $msg = '';

    $email = str_replace('\'', '\\\'', $email);
    $pass = str_replace('\'', '\\\'', $pass);
    $time = time();

    $check =  "SELECT * FROM `user` WHERE email = '$email' AND pass = '$pass'";

    if ((executeNum($check)) > 0) {
        $msg = "Đăng nhập thành công";
        $datares = executeResult($check);
        $userData = new user($datares[0]['id'], $datares[0]['name'], $datares[0]['email'], $datares[0]['timeInsert'], $datares[0]['timeUpdate']);
        $header = [
            'alg' => 'manhdb',
            'typ' => 'manhml'
        ];

        $payload = [
            'uid' => $userData->id,
            'sub' => $userData->name,
            'exp' => time() + (30 * (24 * (60 * 60)))
        ];
        // mã hóa header
        $header = base64_encode(json_encode($header));
        /* mã hóa payload */
        $payload = base64_encode(json_encode($payload));
        /* mã hóa chữ ký */
        $signature = hash_hmac('sha256', $header . '.' . $payload, KEY);

        /* Tạo token */
        $token = $header . '.' . $payload . '.' . $signature;

        $res = new returnData(1, $userData, $msg);
    } else {
        $msg = "Tài khoản hoặc mật khẩu không chính xác";
        $res = new returnData(0, null, $msg);
    }

    echo json_encode($res);
} else {
    $res = new returnData(0, null, "Lỗi kết nối");
    echo json_encode($res);
}
