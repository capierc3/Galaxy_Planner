export const dice = {
    rollD4 () {
        return Math.floor(Math.random() * 4) + 1
    },
    rollD5 () {
        return Math.floor(Math.random() * 5) + 1
    },
    rollD6 () {
        return Math.floor(Math.random() * 6) + 1
    },
    rollD8 () {
        return Math.floor(Math.random() * 8) + 1
    },
    rollD10 () {
        return Math.floor(Math.random() * 10) + 1
    },
    rollD12 () {
        return Math.floor(Math.random() * 12) + 1
    },
    rollD20 () {
        return Math.floor(Math.random() * 20) + 1
    },
    rollPercent () {
        return Math.floor(Math.random() * 100) + 1
    },
    rollCustom (low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low)
    },
    rollCustomFrac (low, high) {
        return (Math.random() * (high - low) + low)
    },
    rollHandful(die,times) {
        let total = 0;
        for (let i = 0; i < times; i++) {
            total += die()
        }
        return total;
    }
}