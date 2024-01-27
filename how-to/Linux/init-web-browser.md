```bash
cd .config
```

```bash
sudo mkdir -p lxsession/LXDE-pi
```

```bash
sudo nano lxsession/LXDE-pi/autostart
```

```bash
@lxpanel --profile
LXDE-pi
@pcmanfm --desktop
--profile LXDE-pi
#@xscreensaver -no-splash
point-rpi
@chromium-browser --start-fullscreen --start-maximized 10.33.0.3:90/...
```
