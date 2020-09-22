<?php
header("content-type:text/html;charset=utf-8");
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2020/9/22
 * Time: 14:32
 */
$name=$_POST['name'];
echo isset($name)?$name:1;

?>
