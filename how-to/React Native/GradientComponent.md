# Gradient component
```
expo install expo-linear-gradient
```

## How to use? 🤔
```
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#c0392b', '#f1c40f', '#8e44ad']}
  start={{x: 0, y: 0.5}}
  end={{x: 1, y: 1}}
  style={styles.some}>
</LinearGradient>
```