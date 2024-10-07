package com.hg.chatroom.controller;

import com.hg.chatroom.model.Text;
import com.hg.chatroom.repository.ChatroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/chatroom")
@CrossOrigin
public class ChatroomController {
    private final ChatroomRepository chatroomRepository;
    public ChatroomController(ChatroomRepository chatroomRepository) {
        this.chatroomRepository = chatroomRepository;
    }
    @GetMapping(value = "/texts")
    public List<Text> getText() {
        return chatroomRepository.findAll();
    }
    @PostMapping(value = "/save")
    public Text createText(@RequestBody Text text) {
        return chatroomRepository.save(text);
    }
}
