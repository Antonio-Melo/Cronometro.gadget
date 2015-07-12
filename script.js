function carga(){
	contador_s =0;
	contador_m=0;
	contador_h=0;
	s=document.getElementById("segundos");
	m=document.getElementById("minutos");
	h=document.getElementById("horas");

	window.setInterval(
	function(){
		if(contador_s ==60)
		{
			contador_s=0;
			contador_m++;
			if(contador_m==60)
			{
				contador_m=0;
				contador_h++;
				if(contador_h ==24)
				{
					contador_s=0;
					contador_m=0;
					contador_h=0;
				}
			}
		}
		s.innerHTML =contador_s;
		m.innerHTML =contador_m;
		h.innerHTML =contador_h;
		contador_s++;
	}
	,1000);
}

function init(){
    var oBackground = document.getElementById("imgBackground");
    oBackground.src = "url(images/background.png)";
}