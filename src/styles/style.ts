import styled from '@emotion/native';

// Colors
export const colors = {
  primary: '#EEE8E9',
  secondary: '#F2F3F8',
  tertiary: '#7880B5',
  alternative: '#999999',
  close: '#EF7C8E',
};

// Header
export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.tertiary};
  letter-spacing: 2px;
  font-style: italic;
`;

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary};
`;


// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #fff;
`;

export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 50%;
  height: 60px;
  background-color: ${(props: any) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const ListView = styled.TouchableHighlight`
  background-color: ${colors.secondary};
  height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const TaskText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.tertiary};
`;

export const TaskDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.alternative};
  text-align: left;
  text-transform: uppercase;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.tertiary};
  height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

// Text for swiped task row
export const SwipedTaskText = styled(TaskText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

