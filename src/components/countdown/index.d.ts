export interface CountDownProps {
  count: number;
  onTimeout: () => void;
  propStyle?: StyleProp<TextStyle>;
}
