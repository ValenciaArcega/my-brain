# Calendar
https://github.com/stephy/CalendarPicker
```
npm install --save react-native-calendar-picker
```

```
npm install --save moment
```
## How to use? 🤔
```
import CalendarPicker from 'react-native-calendar-picker';
import 'moment/locale/es-mx';

const [calVisible, setCalVisible] = useState(false);
const showCal = () => {
	setMarginTopLabel(150);
  setCalVisible(true);
};
const hideCal = () => {
	setMarginTopLabel(16);
	setCalVisible(false);
};


<TouchableOpacity 
	style={s.formSignUpButtonCalendar} 
	onPress={showCal}>
  {calVisible
    ?
      <View style={s.calendarContainer}>
        <CalendarPicker
          previousTitle="Prev"
          nextTitle="Next"
          todayBackgroundColor="#b2b2b2"
          selectedDayColor="#ffa94d"
          selectedDayTextColor="#FFFFFF"
          startFromMonday={true}
          onDateChange={(v) => {
            v.locale('es-mx');
            const d = v.format('dddd, DD [de] MMMM [de] YYYY');
            setDateText(d);
            userData.fecha = d;
            hideCal();
          }}
         />
       </View>
     : <Text style={{ color: "#d9480f", fontSize: 16 }}>{dateText}</Text>}
</TouchableOpacity>

```
Styling the container
```
calendarContainer: {
    height: 280,
    width: 300,
    padding: 10,
    borderRadius: 15,
    shadowColor: 'black',    
    backgroundColor: '#f2f2f2',
},
```