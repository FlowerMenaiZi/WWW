<?php
header("content-type:text/html;charset=utf-8");
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2020/9/22
 * Time: 14:53
 */

$email = $_POST['email'];
$password = $_POST['password'];
if (isset($email)){
    if ($email == '1219902018@qq.com'){
        echo '邮箱正确';
    }else{
        echo '邮箱错误';
    }
    return;
}
if (isset($password)){
    if ($password == '123456789'){
        echo '密码正确';
    }else{
        echo '密码错误';
    }
    return;
}
?>
