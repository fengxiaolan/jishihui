<?php
   
header("Access-Control-Allow-Origin:*");
	$username = $_GET["username"]; // 获取用户名
	$password = $_GET["password"]; // 获取密码

	// 连接数据库
	mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("jishihui");
	// 创建SQL语句
	$sql = "SELECT id, username, level, score FROM user WHERE username='$username' AND password='$password'";
	// 查询
	//echo "$sql";
	$result = mysql_query($sql);
	// 判断查询结果集
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo '{"status":1, "message":"success", "data":'. json_encode($row) .'}';
	} else {
		echo '{"status":0, "message":"failed", "data":{}}';
	}
	// 关闭数据库连接
	mysql_close();
?>