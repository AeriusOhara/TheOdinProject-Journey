function switchTheme(){
    const root = document.documentElement;
    const curTheme = root.className;
    var newTheme = '';

    themeSwitchBtn = document.querySelector('.theme-switcher');

    if(curTheme == 'light'){
        newTheme = 'dark';
    }
    else {
        newTheme = 'light';
    }

    root.className = newTheme;
    themeSwitchBtn.innerText = newTheme;
}