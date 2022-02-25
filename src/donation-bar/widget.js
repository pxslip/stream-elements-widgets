let amount = 0;
let period = 'month';
let goal = 800;

function reCalcCompletionPercentage(current, goal) {
  const currValElem = document.getElementById('bk-donobar_current_value');
  currValElem.textContent = current.toFixed(2);
  const barWidth = (current / goal) * 100;
  const filledBarElem = document.getElementById('bk-donobar_filled_bar');
  filledBarElem.style.width = `${barWidth}%`;
}

window.addEventListener(
  'onEventReceived',
  function ({ detail: { listener, event } }) {
    if (listener === 'tip-latest') {
      amount += event.amount;
      reCalcCompletionPercentage(amount, goal);
    }
  }
);

window.addEventListener(
  'onWidgetLoad',
  function ({ detail: { fieldData, currency, session } }) {
    document.querySelectorAll('.currency').forEach((elem) => {
      elem.innerText = currency.symbol;
    });
    period = fieldData.donationPeriod ?? 'month';
    goal = fieldData.donationGoal ?? 800;
    amount = session?.data['tip-' + period]?.amount ?? 0;
    reCalcCompletionPercentage(amount, goal);
  }
);
