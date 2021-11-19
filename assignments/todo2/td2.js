funciton rSigma(num) {
    if(num >0) {
        return rSigma(num) + num;
    }
    return 0
}