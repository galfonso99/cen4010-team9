package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void createUser(User user){
        userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public Optional<User> findUserById(Integer id){
        return userRepository.findById(id);
    }

    public void updateUser(Integer userId, User updatedUser){
        getAllUsers().stream().forEach(user -> {
            if(user.getId() == userId){
                userRepository.save(updatedUser);
            }
        });

    }

    public void deleteUser(Integer id){
        userRepository.deleteById(id);
    }

    public User findById(int id) {
        return userRepository.getOne(id);
    }

    public User save(User wishlist) {
        return userRepository.save(wishlist);    }
}
