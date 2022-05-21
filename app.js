const HOST = "bionic-reading1.p.rapidapi.com";
async function main(content, key) {
  localStorage.setItem("key", key);
  let old = localStorage.getItem("content");
  if (old == content) {
    return;
  }
  localStorage.setItem("conent", content);
  if (content.length < 1) {
    return;
  }
  const button = document.getElementById("convert");
  button.disabled = true;
  const text = await convert(content, key);
  button.disabled = false;
  document.getElementById("response").innerHTML = text;
}

async function convert(content, key) {
  const encodedParams = new URLSearchParams();
  encodedParams.append("content", content);
  encodedParams.append("response_type", "html");
  encodedParams.append("request_type", "html");

  // TODO: Adjust based on view size
  encodedParams.append("fixation", "1"); // 1-5 steps of 1
  encodedParams.append("saccade", "10"); // 10-50 steps of 10

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": HOST,
      "X-RapidAPI-Key": key,
    },
    body: encodedParams,
  };

  const response = await fetch(`https://${HOST}/convert`, options);
  return await response.text();
}

document.getElementById("api_key").value = localStorage.getItem("key");

// TODO: Auto resize font to fit
