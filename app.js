async function main(content, key) {
  localStorage.setItem("key", key);

  if (content.length < 1) {
    return;
  }
  const button = document.getElementById("convert");
  button.disabled = true;
  const encodedParams = new URLSearchParams();
  encodedParams.append("content", content);
  encodedParams.append("response_type", "html");
  encodedParams.append("request_type", "html");

  // TODO: Adjust based on view size
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
  button.disabled = false;
  document.getElementById("response").innerHTML = await response.text();
}

document.getElementById("api_key").value = localStorage.getItem("key");

// TODO: Auto resize font to fit
