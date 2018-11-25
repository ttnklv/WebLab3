import lombok.Data;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@Data
@ManagedBean(name = "deadman")
@RequestScoped
public class DeadBean {
    private String name = "pidor";
}
