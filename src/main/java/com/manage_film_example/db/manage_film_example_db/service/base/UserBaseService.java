package com.manage_film_example.db.manage_film_example_db.service.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Service;

import com.manage_film_example.db.manage_film_example_db.mapper.User;
import com.manage_film_example.db.manage_film_example_db.service.UserService;

@Service
public class UserBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}


    //CRUD METHODS
    
    	
        
    //CRUD - CREATE
    	
	public User insert(User obj) {
		
		long id = jdbcTemplate.queryForObject("SELECT nvl(max(\"id\")+1, 1) FROM User", new MapSqlParameterSource(), Long.class);
		obj.set_id(id);
		
		String sql = "INSERT INTO User (\"id\", \"mail\",\"name\",\"password\",\"roles\",\"surname\",\"username\"  )	VALUES (:id, :mail,:name,:password,:roles,:surname,:username  )";

		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("mail", obj.getMail())
			.addValue("name", obj.getName())
			.addValue("password", obj.getPassword())
			.addValue("roles", obj.getRoles())
			.addValue("surname", obj.getSurname())
			.addValue("username", obj.getUsername());

		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
        	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM User WHERE \"id\"=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
        	
    //CRUD - GET ONE
    	
	public User get(Long id) {
	    
		String sql = "select * from User where \"id\" = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return jdbcTemplate.queryForObject(sql, parameters, new User());
	}

    	
        	
    //CRUD - GET LIST
    	
	public List<User> getList() {
	    
		String sql = "select * from User";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new User());
	}

    	
        
    //CRUD - EDIT
    	
	public User update(User obj, Long id) {

		String sql = "UPDATE User SET \"mail\" = :mail,\"name\" = :name,\"password\" = :password,\"roles\" = :roles,\"surname\" = :surname,\"username\" = :username  WHERE \"id\"=:id";

		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("mail", obj.getMail())
			.addValue("name", obj.getName())
			.addValue("password", obj.getPassword())
			.addValue("roles", obj.getRoles())
			.addValue("surname", obj.getSurname())
			.addValue("username", obj.getUsername());

		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in  Custom.js
     */
    
    
    /*
    Name: changePassword
    Description: Change password of user from admin
    Params: 
    */
    


}
