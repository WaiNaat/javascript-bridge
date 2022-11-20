const BridgeConfig = {
  UP_VALUE: 1,
  DOWN_VALUE: 0,
  UP: 'U',
  DOWN: 'D',
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
};

const GameConfig = {
  RETRY: 'R',
  QUIT: 'Q',
};

const Message = {
  GAME_START: '다리 건너기 게임을 시작합니다.',
  ENTER_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  ENTER_MOVE: `이동할 칸을 선택해주세요. (위: ${BridgeConfig.UP}, 아래: ${BridgeConfig.DOWN})`,
  ENTER_RETRY: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GameConfig.RETRY}, 종료: ${GameConfig.QUIT})`,
  GAME_END: '최종 게임 결과',

  ERROR_BRIDGE_LENGTH: `[ERROR] 다리 길이는 ${BridgeConfig.MIN_LENGTH}부터 ${BridgeConfig.MAX_LENGTH} 사이의 자연수여야 합니다.`,
  ERROR_MOVE: `[ERROR] 잘못된 입력입니다. (위: ${BridgeConfig.UP}, 아래: ${BridgeConfig.DOWN})`,
  ERROR_RETRY: `[ERROR] 잘못된 입력입니다. (재시도: ${GameConfig.RETRY}, 종료: ${GameConfig.QUIT})`,

  result(isSuccess) {
    const result = isSuccess ? '성공' : '실패';
    return `게임 성공 여부: ${result}`;
  },

  trials(trials) {
    return `총 시도한 횟수: ${trials}`;
  },
};

module.exports = { BridgeConfig, GameConfig, Message };