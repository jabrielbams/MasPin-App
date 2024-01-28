import {TouchableOpacity} from 'react-native';

const TabBarButton = ({children, disabled, ...rest}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.5 : 1, // Reduce opacity if disabled
      }}
      {...rest}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

export default TabBarButton;
