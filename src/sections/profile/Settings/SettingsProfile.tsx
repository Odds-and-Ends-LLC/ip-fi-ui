"use client";

// packages
import { Button, Stack, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

// styles
import styles from "./Settings.module.css";

// components
import { Icon, ProfilePicture, TextField } from "@/components";

// types
import { IconType } from "@/components/Icon";
import { EditProfilePayloadType, UserType } from "@/types";
import { LoadingButton } from "@mui/lab";
import { updateUserPfp, updateUserProfile } from "@/lib/actions/user";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z
    .string()
    .min(1, "Please provide a username")
    .max(30, "Username should be less than 30 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email.")
    .trim(),
  about: z
    .string()
    .trim()
    .optional(),
  website: z
    .string()
    .trim()
    .optional(),
  twitter: z
    .string()
    .trim()
    .optional(),
  instagram: z
    .string()
    .trim()
    .optional(),
  discord: z
    .string()
    .trim()
    .optional(),
  opensea: z
    .string()
    .trim()
    .optional(),
  looksRare: z
    .string()
    .trim()
    .optional(),
});

export default function SettingsProfile({
  user
} : {
  user: UserType
}) {
  console.log(user);
  const [changingPhoto, setChangingPhoto] = useState(false);
  const form = useForm<EditProfilePayloadType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: user.username,
      email: user.email,
      about: user.about,
      website: user.website,
      twitter: user.twitter,
      instagram: user.instagram,
      discord: user.discord,
      opensea: user.opensea,
      looksRare: user.looksRare,
    }
  });

  const { setError, reset, formState: { isDirty, isValid, isSubmitting } } = form;

  const onSubmit: SubmitHandler<EditProfilePayloadType> = async (data) => {
    const res = await updateUserProfile(data);

    if (res.invalid?.username) {
      setError("username", { message: res.invalid.username }, { shouldFocus: true });
      return;
    }

    if (res.invalid?.email) {
      setError("email", { message: res.invalid.email }, { shouldFocus: true });
      return;
    }
    // if (res.error) {
    //   setError("root", { message: res.error });
    // }

    // setOpenSnackbar(true);
  };

  const handleImageSelect = async (image: File | null) => {
    setChangingPhoto(true);
    const formData = new FormData();
    formData.set("pfp", image as Blob);

    const res = await updateUserPfp(formData);
    if (res.error) {
      // todo error
    }
    setChangingPhoto(false);
  };

  const handleDiscard = () => {
    reset({}, { keepDefaultValues: true });
  };

  const renderLinkLabel = (icon: IconType, label?: string) => ({
    InputProps: {
      startAdornment: (
        <Stack className={styles.linkLabel} sx={{ minWidth: { tablet: "160px" } }}>
          <Icon icon={icon} />
          <Typography
            variant="label1"
            textTransform="capitalize"
            sx={{ display: { mobile: "none", tablet: "flex" } }}
          >
            {label || icon}
          </Typography>
        </Stack>
      ),
    },
  });

  return (
    <FormProvider {...form}>
      <Stack component="form" sx={{ flex: 1, gap: "24px", height: "100%" }} onSubmit={form.handleSubmit(onSubmit)}>
        <Typography variant="h4">PROFILE SETTINGS</Typography>
        <Stack
          width="100%"
          sx={{
            alignItems: { mobile: "center", laptop: "flex-start" },
          }}
        >
          <ProfilePicture size="m" upload image={user.pfp} onImageSelect={handleImageSelect} loading={changingPhoto} />
        </Stack>
        <Stack
          className={styles.profileUsernameEmailContainer}
          sx={{ flexDirection: { tablet: "row" } }}
        >
          <TextField name="username" fullWidth label="Username" />
          <TextField name="email" fullWidth label="Email" />
        </Stack>
        <TextField name="about" label="About" multiline rows={3} />
        <Stack className={styles.profileTextFieldContainer}>
          <Typography variant="label1" textTransform="none">
            Links
          </Typography>
          <Stack gap="16px">
            <TextField name="website" {...renderLinkLabel("website")} />
            <TextField name="twitter" {...renderLinkLabel("twitterX", "Twitter")} />
            <TextField name="instagram" {...renderLinkLabel("instagram")} />
            <TextField name="discord" {...renderLinkLabel("discord")} />
            <TextField name="opensea" {...renderLinkLabel("openSea")} />
            <TextField name="looksRare" {...renderLinkLabel("looksRare")} />
          </Stack>
        </Stack>
        <Stack
          className={styles.profileActionButtons}
          sx={{ flexDirection: { tablet: "row-reverse" } }}
        >
          <LoadingButton type="submit" loading={isSubmitting} disabled={!isDirty || !isValid} variant="solidGreen">SAVE CHANGES</LoadingButton>
          <Button onClick={handleDiscard} disabled={!isDirty || isSubmitting} variant="outlineGreen">DISCARD</Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
