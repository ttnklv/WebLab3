import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import java.util.LinkedList;
import java.util.List;

@ManagedBean
@RequestScoped
public class MainBean {
    private double x;
    private double y;
    private double r;
    private List<Result> results;
//    String answer;

    public void setX(double x) {
        this.x = x;
    }

    public void setR(double r) {
        this.r = r;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public List<Result> getResults() {
        addResult();
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }

    public void addResult() {
        results = new LinkedList<Result>();
        Result result = new Result(1, 2, 3, areaCheck(1, 2, 3));
        results.add(result);

    }

    private String areaCheck(double x, double y, double r) {

        boolean[] flag = {false, false, false};

        if ((x * x + y * y <= r * r) && (x >= 0 && x <= r / 2) && (y <= 0 && y >= -r / 2)) {
            flag[0] = true;
        }
        if ((y <= (x + r / 2)) && (x >= -r / 2 && x <= 0) && (y >= 0 && y <= r / 2)) {
            flag[1] = true;
        }
        if ((x <= 0 && x >= -r) && (y >= -r / 2 && y <= 0)) {
            flag[2] = true;
        }

        if (flag[0] || flag[1] || flag[2]) return "hit";

        return "missed";
    }
}
