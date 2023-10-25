function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HCfVhnYrdp":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v13q1attempts:player.GetVar("v13q1attempts"),v13q1answeredcorrect:player.GetVar("v13q1answeredcorrect"),v13q2attempts:player.GetVar("v13q2attempts"),v13q2answeredcorrect:player.GetVar("v13q2answeredcorrect"),v13q3attempts:player.GetVar("v13q3attempts"),v13q3answeredcorrect:player.GetVar("v13q3answeredcorrect")})
	}
	)
}

