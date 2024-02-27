//your JS code here. If required.
#container{
	margin:20px;
	 position: relative;
}
#container::before {
    content: "Before";
    position: absolute;
    top: -30px;
    left: 0;
    color: #f00;
    font-size: 20px;
}

#container::after {
    content: "After";
    position: absolute;
    bottom: -30px;
    right: 0;
    color: #f00;
    font-size: 20px;
}