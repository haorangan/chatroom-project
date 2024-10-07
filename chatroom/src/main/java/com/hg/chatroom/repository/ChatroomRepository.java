package com.hg.chatroom.repository;

import com.hg.chatroom.ChatroomApplication;
import com.hg.chatroom.model.Text;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;
@Repository
public interface ChatroomRepository extends JpaRepository<Text, Long> {
}
