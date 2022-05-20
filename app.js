async function main(content, key) {
  //TODO: Remember key
  if (content.length < 1) {
    return;
  }
  document.getElementById("convert").disabled = true;
  const encodedParams = new URLSearchParams();
  encodedParams.append("content", content);
  encodedParams.append("response_type", "html");
  encodedParams.append("request_type", "html");
  encodedParams.append("fixation", "1");
  encodedParams.append("saccade", "10");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
      "X-RapidAPI-Key": key,
    },
    body: encodedParams,
  };

  const response = await fetch(
    "https://bionic-reading1.p.rapidapi.com/convert",
    options
  );
  document.getElementById("convert").disabled = false;
  document.getElementById("response").innerHTML = await response.text();
}