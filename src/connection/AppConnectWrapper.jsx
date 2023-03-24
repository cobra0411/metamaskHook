import { AppConnect } from "./AppConnect";
import { useMetaMask } from "../hooks/useMetaMask";

export function AppConnectWrapper() {
  const wallets = [
    {
      id: "1",
      text: "Metamask",
      icon_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP3SURBVHgB7VbPa2NVFP7ufS9J02SaN8Up6TTjvMp0IQNjcOHK0VcRF26m/tjMatqtDFjRKaKLCbiRMuD8AzIjLkREW5HRjZCUigwuNEVhRqj0YVumNM3LM6kzSZP3ruclkx83eUlAXAj6QUjOOfec7557zzk3wH8Wbxlx45O5uI5/CF68RUOOx7sXccdZ+e1QbP18eSr9+5WpefwNbF2ZSm4vnbz66cXJAnfcdNB15zvtrFN48/zEnAKsNOVndI7kpGIzhlXXYR+duraT6Uu0qGlcjczT2gulIxjfbtawWxRNs7m8vj/tS7p0fuImfV3q1D1+ghO5gpAKjIRgRkZgdhO6AppVhE4U2m7Rxde/uqjURNcaPnvtu72M91vt8n+2O+CdnFvf8StnVYRH6oF1+IG2v77lYOOe629mTsuPy37C9HMoVgRu/FjF2qbjZ8bBIfDFL7W+hB6EUExfUpdhAwNwe9uFaYke/a07Tuf9+SKqlrP+pIJlMAR39+VsylWqEssd5mamMrbtS8qZMIZ5RwOyTEWEsRAb5qanDE3zJYVAtnv1iMqgjzNoYVav4nNxRbIHKcLLZ5U6cXyssc4HUqZS9VYdZINKgyiZ8Mg49OMkBxi28wIR0gufq/MIL55TcSJGASniXknApPV390Xz6KVkerZ1az6emp1RrnbqDv90UT5qLFU4w/FY21Y+8uyidVTjMQ7ecX73/hD2xz/cn+57px6MM4rerbv/gCGXr9U/B1ZNspUrbstmFVwcVWXfyRjTXjdkXQ8pjbGeATGuccSONW6Cc/lwlIdpqQrDxCNBb2r1IETjUeLoFB68lzAEF2n0gUulWq4wjIbbuiplVqWRNxruX8FkyYTf3Z1tylKmNG/mMABelp2EHgLUQoMIPdCNG4VUu2Wk6nVc6G5Hn3s9WK01FEGV1wkGwbtf56F/KCDfXA3RJGBnekhLJZGh3C+0dkikecsLJKgVXDw6pYLiUou0fYoV4FiQ5q8tcJBvzOZIhCM6KnHaieX2syj3qeqsBlzlg6ZMRYWxMQUFuwYWHIU19QI+y+Zgb37fIr69I3D9ncuobXxFkllvqeioPEC897hTlkin398zd5YS1Mgi2dQFaTCETs2gePp58MeehEXBb/4kz9pceAbKU6+hMraOxN436AYd+VpfUg90pGu0syap7Y3GsCh9mYudTh5Y+Uteybz43NOI0ONaJ7QKsOwCvbUhO3DyzBssxwxSP0Gf1sYDipORMu8m3aH/N3SV8xBstRY9zE6n2pMk/fmHiwzMm1aavFOWEQoWZl9aMJuqrbfjesBRDGLQEsu71weSDkN65YaOKoyWgsOefXVhFf/j34K/ADj6eIjmhFlIAAAAAElFTkSuQmCC"
    },
    {
      id: "2",
      text: "WalletConnect",
      icon_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7VRNSFRRFD7n3jcOmGRNlP0bKAhBokHZjCMoFUYRtKlFi6JSkRa1KRFKtLQoghYRY6ODGrYIN1Fg9oOmNf1IILRpYUVBlIQkZkQ6472n83Ic34wz0xQt54Nh3r33u993v/POfQAppJDCXwCTJZa206JAQB9AhEIg2Mw7lyDgCJB+QwL7ZHCq+/HR9I/JaCVlWtyqatnoJBA5EtBGUaDH+CSa+htwGv7VNPcK2ZfZVTeTtlrnhcAAEU3w9kz+t1nXCGiIpLH9eQWOxdMVkABZdn01bMh1RcROG+lNw+PC4a8ylhqfRTqSLOAFr7k+kwI3oqa2RLoJkxZ7aS2BGkCCTDRgv7/CuBePW9Q6lS+1cdsUtKWJsv5D+AGShdkw/FsXFrtBq53ttCGa52qngnlzHZRT2jy31+n75rBqzSIiqctH2aj1LW6YLERZ5q/CYYgBbqw65pwlxIZnlfJMLI7LSzmIuhc0Tdrscoc1ecQ7RaVOsFghP64krQacvkBhtJi7hU6bhtwxwO+uwd1KF6M5Th/lIulHzMvmWHnBgDpnXY8wzZCynqUGQzVYLqbFg5LrlB8+fXOwnkg1moaz4MPVuFqCjeEqeCbzUOmHgLTGHGsN71WaPBURbt4pO2iVDNBNIu0OTY2BIctJ611msrAZivucpnzu+HjepkVnEFQfj1bMqONbYQjXk8M4mtDUhNszvpiMjLucaMtvAwLNNyJcFb46df4q2VTiVTUa4QITMCT2g4uwIMR5Z7eLot6D+DVaP+6VWd9FaY4xukNoSWPeRYSap5Xy0uwUN1U1afJghBa+XDgltvUcw4lY2nE/Dq/3YeDn0NBuluoJpTVVa62GJnh8TRIeN9swFOPF5HexM57hDOUP2NtFcmRctXHrv/JX2y7H45X4VIVWtGdayCODlfgFUkghhf+FXyiUGhBV1PwAAAAAAElFTkSuQmCC"
    },
    {
      id: "3",
      text: "CoinbaseWallet",
      icon_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgBlVZbaFxFGP5m9tZNuklaWm2ixZOt1FhSoS+mKBWDgqYoUSQUBSFU6UOh2oKPlRT7IoKCKFW8lNB6KfTBKNaiL6lYqlTEUoOtEZttG9zUJLVtsslusuf/nZlz2XPOdrfx2x12Lv98/2X+f2YF6sDax8uaxosPkMBzEuIRhrgd4LQQogzGiBL5jZi+G/ko/Uk9HlFrYcOLhR1SxF4H8wrcAkIgZxP2//5x+uCSlGzaXmhbEPJTZfHD+P84bdti2/nBdK6mko7+eUtKGlZdS485IMRsLK4CB0hc+RyT7A4q8rdld1xtTi4kzygii5n9VVFRoz4iQOjQOwZE5IUYnafFrtzgimt6GPeUJEuxARZkGYtdUucrsHmDxAs9SdyXlWhqECgU1amPEb44WcbQqYUqeWZan0ZiQE3u8T3p6P/XIpJjOhwciEPLcoF3djXg/o4YakEre/ndOYxPEaL7FbpGDzWflrpHZezTLhOxcV23xjTw+d7Gugo0OtslDuxuQKYBlf361wnoTi0j0ccxAvcqF2EaOW3XUylkWyWWgnvWSmzvSVX2G0W6b/dm+642x63U1BZm2RLMkjUrY+h/LBUi+utvwtR18sermiXWtVWMeP7RJD48No+ZgvaAvFNqoRRtikvCHeQG0ItnpyWr0vXVg7P46dyiP958bxKf7c3444xKiIc2xvH1jyWfR//GmK24imMilOiqf3dbdZhMjJk9C421UejwkivjrdrsprDJcy9e6tAWbK5WQmwq0sRbuWnGURl2ZExkWPjRiNuwIUjq7PZSHflpuikBkeODE49qJecvlZUMVXxnUzOIS6azxOEtw78WcWMuYwrPw5s7mzA+afvjO1eHU1tz/DJaqlS/qyjGyMXnKDG6jMvXdCZ4S9dnbQweL+ClZ5aHSKPEQWj5iWk7PClQzInWH+Tk0dtmlfJDXhF67b2vZnHuYhlLwWXl4RtHZhDlUOd2BEeF7VT8Ih/QWaEeILex8ebZ1yZx8myproJTIyU8/soV3CjYcDicppXEuLzfcchFa++ltyDFHnZuSC+kBn3djXh6SyM2ZhOmCPMqLH9cXsT7X87g+zPFKnmHWLydH1q7O6RkZc+fTclU6mdlw3pf0n1DOHgdBBGd9+TVm4JMquvK4TX/ILq1deuFu+yEPAH30QoRBZMmanmIReSkoO6JofacNxMq7fw32YtScLfa/a25Sd3bNHg7+7fszeeGicWDQQVVNgSx+smxfqVsQO23cAsokglVeANTx9o/qLFeH6u2XniCBW9Tf4M6VdZ0Cucq0imXV0acUHfI4enj64YVFdfi+A/dsDBpxcsr2QAAAABJRU5ErkJggg=="
    },
    {
      id: "4",
      text: "FortMatic",
      icon_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB7ZQ9igJBEIVfzbhuugfaK2zgRh5h1yt4BUGjUTPRSBR/AsFE0EQ8gIGCgRgLmpiIWpaCMkiPf92iYH9Jz7zumsdUNQ+wWAxAapnp/xcVeXCg83EXBa9E5VM9FFTAjB9ZXOiwQlcla/3JvTzFNHTtQSL0pOUT3MAGGEDHdMNIZ6uUhwHeZ6avfZFOiUX4e01o0ZkzDiPuVSlhzHQHMcLn9jkgXOxMLxJm9JcOon5tzcjIjL8O7xIobNQ0VaO5LEW/9hfhJPymDoaq2ke2d7yYoqPa0Lq9gTBmEpvRXHvfjetNZR4NCfhjJz7cy2EvNU0xHH0CXqquNrRYjLEFpx88SHsShkIAAAAASUVORK5CYII="
    }
  ];

  const [connect, metaState] = useMetaMask();

  const onConnect = async (event, id) => {
    switch (id) {
      case "1":
        if (!metaState.account.length) {
          connect();
        }
        console.log("accounts", metaState.account);
        // MetaMask.init(setConnectedAddress);
        // await MetaMask.connect();
        return;
      default:
        return;
    }
  };

  return (
    <div>
      <AppConnect
        title={"Connect your Ethereum Wallet"}
        wallets={wallets}
        onConnect={onConnect}
      />
    </div>
  );
}
