import com.google.gson.Gson;

import java.util.ArrayList;

public class Service {
    ArrayList<Student> studentList = new ArrayList<Student>();

    void addMockData(){
        studentList.add(new Student("Toni", 12325) );
        studentList.add(new Student("Ana", 65432) );
        studentList.add(new Student("Dumitru", 555012312) );
        studentList.add(new Student("Xander", 987) );
    }

    public String studentListJson(){
        addMockData();
        Gson gson = new Gson();
        return gson.toJson(studentList);
    }
}
