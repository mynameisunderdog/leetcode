
module.exports = function (text, tokensMap, rules) {
  const result = [];
  const tokens = Object.keys(tokensMap);
  const rulesKeys = Object.keys(rules);
  const getRule = (rule) => rulesKeys.includes(rule) ? rules[rule] : rule;
  const getTokens = (token) => tokens.includes(token) ? tokensMap[token] : token;
  const getRuleValue = (rule) => {
    const value = getRule(rule);
    return typeof value === 'number' ? value : getRuleValue(value);
  }
  const getTokensValue = (token) => {
    const value = getTokens(token);
    return typeof value === 'number' ? value : getTokensValue(value);
  }
  const getRuleTokenValue = (rule, token) => {
    const ruleValue = getRuleValue(rule);
    const tokenValue = getTokensValue(token);
    return typeof ruleValue === 'number' && typeof tokenValue === 'number' ? ruleValue * tokenValue : `${ruleValue}${tokenValue}`;
  }

  text.split('*').forEach((string) => {
    const [token, rule] = string.split('=');
    const value = getRuleTokenValue(rule, token);
    result.push(`let ${value}`);
  });

  return result.join('\n');
}
