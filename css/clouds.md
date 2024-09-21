
# Cloud with vanilla CSS
```html
<article class="wrapperCloud">
	<div class="cloudIllustration">
		<span class="shadowCloudIllustration"></span>
	</div>
</article>
```

```css
/* Just to move and scale the cloud */
.wrapperCloud {
	scale: .7;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(32%, -85%);
	z-index: 3;
}

.cloudIllustration {
	width: 350px;
	height: 120px;

	background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0.05, #f2f9fe), to(#d6f0fd));
	background: -webkit-linear-gradient(#f2f9fe 5%, #d6f0fd 100%);
	background: -moz-linear-gradient(#f2f9fe 5%, #d6f0fd 100%);
	background: -o-linear-gradient(#f2f9fe 5%, #d6f0fd 100%);
	background: linear-gradient(#f2f9fe 5%, #d6f0fd 100%);

	border-radius: 100px;
	position: relative;
}

.cloudIllustration:after,
.cloudIllustration:before {
	content: "";
	position: absolute;
	background: #f2f9fe;
	z-index: -1;
}

.cloudIllustration:after {
	width: 100px;
	height: 100px;
	top: -50px;
	left: 50px;
	border-radius: 100px;
}

.cloudIllustration:before {
	width: 180px;
	height: 180px;
	top: -90px;
	right: 50px;
	border-radius: 200px;
}

.shadowCloudIllustration {
	width: 300px;
	position: absolute;
	bottom: -10px;
	left: 20px;
	background: #000;
	z-index: -1;
	-webkit-box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);
	box-shadow: 0 0 25px 3px rgba(0, 0, 0, 0.3);
	border-radius: 50%;
}
```