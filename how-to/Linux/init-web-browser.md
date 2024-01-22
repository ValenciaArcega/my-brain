
```
cd .config
```

```
sudo mkdir -p lxsession/LXDE-pi
```

```
sudo nano lxsession/LXDE-pi/autostart
```

```
@lxpanel --profile
LXDE-pi
@pcmanfm --desktop
--profile LXDE-pi
#@xscreensaver -no-splash
point-rpi
@chromium-browser --start-fullscreen --start-maximized 10.33.0.3:90/...
```