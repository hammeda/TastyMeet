package fr.tastymeet.apitastymeet.controllers;

import fr.tastymeet.apitastymeet.dto.UserLikeDto;
import fr.tastymeet.apitastymeet.entities.User;
import fr.tastymeet.apitastymeet.services.ConversationServiceImpl;
import fr.tastymeet.apitastymeet.services.IMatchService;
import fr.tastymeet.apitastymeet.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api")
public class MatchController {
    @Autowired
    private IMatchService matchService;
    @Autowired
    private ConversationServiceImpl conversationService;
    @Autowired
    private SimpMessagingTemplate messagingTemplate;


    // Endpoint pour liker un utilisateur
    @PostMapping("/{userId}/like/{likedUserId}")
    public ResponseEntity<?> likeUser(@PathVariable long userId, @PathVariable long likedUserId) {
        // Logique pour enregistrer le like
        matchService.likeUser(userId, likedUserId);

        // Vérifiez les matches après avoir liké
        Set<UserLikeDto> matches = matchService.getMatches(userId);
        System.out.println("Matches pour l'utilisateur " + userId + ": " + matches);

        // Vérifiez si le likedUserId est dans les matches
        if (matches.stream().anyMatch(match -> match.getLikedUserId() == likedUserId)) {
            // Créez une conversation ici
            conversationService.createConversation(userId, likedUserId);

            // Notifiez les utilisateurs via WebSocket
            messagingTemplate.convertAndSend("/user/" + userId + "/matches", "Vous avez un nouveau match !");
            messagingTemplate.convertAndSend("/user/" + likedUserId + "/matches", "Vous avez un nouveau match !");
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}/matches")
    public Set<UserLikeDto> getMatches(@PathVariable long userId) {
        return matchService.getMatches(userId);
    }
}
