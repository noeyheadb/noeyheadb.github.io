function github_click()
{
    window.open('https://github.com/noeyheadb', '_blank').focus();
}

function go(target_id) {
    (new MoveTo()).move(document.getElementById(target_id));
}
