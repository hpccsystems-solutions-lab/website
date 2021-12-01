function OpenECLEditor(codeList, files) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "https://hpcc-ecl-web-editor.vercel.app/");
    form.setAttribute("target", "ecl_web_editor");

    let code = "";
    for (let item of codeList) {
      source = document.getElementById(item);
      code = code + source.innerText;
    }

    var input = document.createElement("input");
    input.type = "hidden";
    input.name = "code";
    input.value = code;
    form.appendChild(input);

    if (files) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = "files";
      input.value = files;
      form.appendChild(input);
    }

    document.body.appendChild(form);

    //note I am using a post.htm page since I did not want to make double request to the page
    //it might have some Page_Load call which might screw things up.
    window.open(
      "",
      "ecl_web_editor",
      "width=1400,height=1000,left=100,top=100,resizable=yes,scrollbars=yes"
    );
    form.target = "ecl_web_editor";
    form.submit();

    document.body.removeChild(form);
  }
