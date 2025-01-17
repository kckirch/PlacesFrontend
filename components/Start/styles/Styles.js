import { StyleSheet } from 'react-native';
import { WIDTH, HEIGHT, LOGOWIDTH, LOGOHEIGHT } from '../../../settings/Dimensions'; 
import COLORS from '../../../settings/Colors';

const ELEMENT_WIDTH = 0.87*WIDTH;
const ELEMENT_HEIGHT = 0.071*HEIGHT;
const SULI_SPACER_HEIGHT = 0.1*HEIGHT;
const SULI_HEADER_HEIGHT = 0.06*HEIGHT;
const SULI_INPUTS_HEIGHT = 0.3*HEIGHT;

export default new StyleSheet.create({
   spaceEvenly: {
      justifyContent: 'space-evenly',
   },
   page: {
      width: WIDTH,
      height: HEIGHT,
      backgroundColor: COLORS.white_100,
      flex: 1,
      alignItems: 'center',
   },
   fullLogo: {
      width:WIDTH, 
      height:WIDTH*LOGOHEIGHT/LOGOWIDTH,
      resizeMode:'contain',
   },
   d1Box: {
      width: ELEMENT_WIDTH
   },
   d2Box: {
      width: ELEMENT_WIDTH,
      height: ELEMENT_HEIGHT,
      borderWidth: 1,
   },
   welcomeText: {
      fontStyle: 'normal',
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 48,
      textAlign: 'center',
   },
   sloganText: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 36,
      textAlign: 'center',
   },
   suliSpacer: {
      width: WIDTH,
      height: 0.1*HEIGHT,
      backgroundColor: COLORS.black_070,
   },
   suliContainer: {
      width: WIDTH,
      height: (1-SULI_SPACER_HEIGHT/HEIGHT)*HEIGHT,
      backgroundColor: COLORS.white_100,
      flexDirection: 'column',
      alignItems: 'center',
   },
   suliHeader: {
      width: ELEMENT_WIDTH,
      height: SULI_HEADER_HEIGHT,
      backgroundColor: COLORS.white_100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   suliHeaderText: {
      color: COLORS.secondary_100,
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 28.8,
   },
   temp_suliX: {
      color: COLORS.secondary_100,
      fontSize: 24,
      fontWeight: 200,
      lineHeight: 28.8,
   },
   suliMain: {
      width: WIDTH,
      height: (1-(SULI_SPACER_HEIGHT+SULI_HEADER_HEIGHT)/HEIGHT)*HEIGHT,
      backgroundColor: COLORS.white_100,
      flexDirection: 'column',
      alignItems: 'center',
   },
   suliInputs: {
      width: WIDTH,
      height: SULI_INPUTS_HEIGHT,
      backgroundColor: COLORS.white_100,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
   },
   suliContinues: {
      width: WIDTH,
      height: (1-(SULI_SPACER_HEIGHT+SULI_HEADER_HEIGHT+SULI_INPUTS_HEIGHT)/HEIGHT)*HEIGHT,
      backgroundColor: COLORS.white_100,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',

   },
   inputLable: {
      color: COLORS.secondary_100,
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 21.6,
      alignItems: 'flex-start',
   },
   inputSubtext: {
      fontSize: 9,
      fontWeight: 400,
      lineHeight: 10.8,
   },
   button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 0.05*ELEMENT_WIDTH,
   },
   buttonText: {
      fontSize: 16,
      fontWeight: 400,
   },
   divider: {
      width: ELEMENT_WIDTH,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 0.02*HEIGHT,
   },
   dividerText: {
      fontStyle: 'normal',
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 22,
      paddingHorizontal: 5,
   },
   line: {
      flexGrow: 1,
      height: 1,
   },
   startButton: {
      marginBottom: 0.02*HEIGHT,
   },
});
