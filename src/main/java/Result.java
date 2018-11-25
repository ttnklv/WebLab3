public class Result {
    double x;
    double y;
    double r;
    String answer;

    public double getY() {
        return y;
    }

    public double getX() {
        return x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }

    public double getR() {
        return r;
    }

    public void setX(double x) {
        this.x = x;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Result(double x, double y, double r, String answer){
        this.r = r;
        this.y = y;
        this.x = x;
        this.answer = answer;
    }


}
